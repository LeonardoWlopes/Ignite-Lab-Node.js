import { Notification } from '@app/entities/notification';

export class NotificationViewModel {
  static toHTTP({ category, content, id, recipientId }: Notification) {
    return {
      id,
      content: content.value,
      category,
      recipientId,
    };
  }
}
