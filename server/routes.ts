import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriberSchema } from "@shared/schema";
import { sendDownloadNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/subscribe", async (req, res) => {
    try {
      const result = insertEmailSubscriberSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      const existing = await storage.getEmailSubscriberByEmail(result.data.email);
      if (existing) {
        sendDownloadNotification(result.data.email).catch(() => {});
        return res.status(200).json({ message: "Already subscribed", subscriber: existing });
      }

      const subscriber = await storage.createEmailSubscriber(result.data);
      sendDownloadNotification(result.data.email).catch(() => {});
      return res.status(201).json({ message: "Subscribed successfully", subscriber });
    } catch (error) {
      console.error("Error subscribing:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  return httpServer;
}
