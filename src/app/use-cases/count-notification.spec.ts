import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications copy';

describe('Count Recipient Notifications', () => {
  it('Should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(
      makeNotification({ recipientId: 'other-id' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'exemple-id-1',
    });

    expect(count).toEqual(2);
  });
});
