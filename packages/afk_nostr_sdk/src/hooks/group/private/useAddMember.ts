import {NDKEvent, NDKKind} from '@nostr-dev-kit/ndk';
import {useMutation} from '@tanstack/react-query';

import {useNostrContext} from '../../../context/NostrContext';
<<<<<<< HEAD
=======
import {useAuth} from '../../../store';
>>>>>>> main

// TODO
export const useAddMember = () => {
  const {ndk} = useNostrContext();

  return useMutation({
    mutationKey: ['addMemberGroup', ndk],
    mutationFn: async (data: {pubkey: string; groupId: string}) => {
      const event = new NDKEvent(ndk);
      event.kind = NDKKind.GroupAdminAddUser;
      event.tags = [
        ['d', data.groupId],
        ['p', data.pubkey],
      ];
      return event.publish();
    },
  });
};
