export type RepairStatus = 'pending' | 'accepted' | 'in_progress' | 'completed' | 'canceled';

export interface RepairRequest {
  id: string;
  user_id: string | null;
  customername: string | null;
  mobilenumber: string | null;
  brand: string | null;
  model: string | null;                 // your column is "model"
  issueDescription: string | null;      // existing camel-case column
  address: string | null;
  preferredTimeSlot: string | null;
  repairDate: string | null;            // stored as date; string is fine on the client
  status: RepairStatus;
  created_at: string;
  updated_at: string;
}
