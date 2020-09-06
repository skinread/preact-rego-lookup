export interface Registration {
    expired: boolean;
    expiry_date: string;
}

export enum VehicleType {
    sedan = 'sedan',
    hatch = 'hatch',
    wagon = 'wagon',
    suv = 'suv',
    truck = 'truck'
}
  
export interface Vehicle {
    type: VehicleType;
    make: string;
    model: string;
    colour: string;
    vin: string;
    tare_weight: number;
    gross_mass: number | null;
}
  
export interface Insurer {
    name: string;
    code: number;
}
  
export interface Record {
    plate_number: string;
    registration: Registration;
    vehicle: Vehicle;
    insurer: Insurer;
}
  
export interface RegoApiData {
    registrations: Record[];
}
