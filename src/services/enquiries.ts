import { 
  collection, 
  doc, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase.ts';

export interface StoredEnquiry {
  id: string;
  name: string;
  email: string;
  organization?: string;
  iloiloLocation: string;
  typology: string;
  budget: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'in_review' | 'consulted' | 'archived';
  userId?: string;
}

export async function saveEnquiryToFirestore(
  data: Omit<StoredEnquiry, 'id' | 'createdAt' | 'status'>,
  userId?: string
): Promise<string> {
  const enquiryId = `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const docRef = doc(db, 'enquiries', enquiryId);

  const payload: Record<string, any> = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    iloiloLocation: data.iloiloLocation,
    typology: data.typology,
    budget: data.budget,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  if (data.organization?.trim()) {
    payload.organization = data.organization.trim();
  }
  if (data.notes?.trim()) {
    payload.notes = data.notes.trim();
  }
  if (userId) {
    payload.userId = userId;
  }

  await setDoc(docRef, payload);
  return enquiryId;
}

export function subscribeToEnquiries(
  callback: (enquiries: StoredEnquiry[]) => void,
  userId?: string,
  isAdmin?: boolean
) {
  const enquiriesRef = collection(db, 'enquiries');
  
  let q = query(enquiriesRef);
  if (!isAdmin && userId) {
    q = query(enquiriesRef, where('userId', '==', userId));
  }

  return onSnapshot(q, (snapshot) => {
    const list: StoredEnquiry[] = [];
    snapshot.forEach((docSnap) => {
      list.push({
        id: docSnap.id,
        ...(docSnap.data() as Omit<StoredEnquiry, 'id'>),
      });
    });
    // Sort client-side by date descending
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    callback(list);
  }, (error) => {
    console.error('Error streaming enquiries:', error);
  });
}

export async function updateEnquiryStatus(enquiryId: string, status: StoredEnquiry['status']) {
  const docRef = doc(db, 'enquiries', enquiryId);
  await updateDoc(docRef, { status });
}
