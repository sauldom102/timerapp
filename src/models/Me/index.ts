import type {User} from 'api/openapi/requests';

export const normalizeMe = (user: User) => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: user.firstName
    ? `${user.firstName ?? ''} ${user.lastName ?? ''}`
    : undefined,
  username: user.username,
  email: user.email,
  emailConfirmed: user.emailConfirmed,
  onboarded: !!user.onboarded,
});

type Me = ReturnType<typeof normalizeMe>;

export default Me;
