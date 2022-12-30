import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as Raw } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      id: notification.id,
    };
  }

  static toDomain(raw: Raw): Notification {
    return new Notification(
      {
        category: raw.category,
        recipientId: raw.recipientId,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
        readAt: raw.readAt,
        content: new Content(raw.content),
      },
      raw.id,
    );
  }
}
