import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipient Notifications', () => {
  it('Should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(makeNotification());

    await notificationsRepository.create(
      makeNotification({ recipientId: 'other-id' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'exemple-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'exemple-id-1' }),
        expect.objectContaining({ recipientId: 'exemple-id-1' }),
      ]),
    );
  });
});
