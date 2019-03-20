export class RegisterUserModel {
  id: number = null;
  firstName: string = null;
  lastName: string = null;
  addressLine: string = null;
  city: string = null;
  country: string = null;
  zipCode: string = null;
  phoneNumber: string = null;
  email: string = null;
  password: string = null;
  roles: Array<string> = [];
}
