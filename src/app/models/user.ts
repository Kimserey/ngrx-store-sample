export interface Profile {
  userId: string;
  firstname: string;
  lastname: string;
  address: string;
  postalcode: string;
  homeNumber: string;
  mobileNumber: string;
  groups: string[];
}

export interface ProfileName {
  firstname: string;
  lastname: string;
}

export interface ProfileAddress {
  address: string;
  postalcode: string;
}

export interface ProfileNumber {
  homeNumber: string;
  mobileNumber: string;
}
