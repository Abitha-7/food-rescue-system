// Shared food storage using localStorage to simulate backend
// TODO: Remove mock functionality - Replace with actual API calls

export interface FoodDonation {
  id: string;
  image?: string;
  title: string;
  category: string;
  description: string;
  location: string;
  expiryDate: string;
  donorName: string;
  status: "available" | "claimed" | "completed";
}

const STORAGE_KEY = "foodresq_donations";

// Initialize with some sample data if empty
const initializeSampleData = () => {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    const sampleData: FoodDonation[] = [
      {
        id: "1",
        title: "Fresh Vegetables",
        category: "Veggies",
        description: "Assorted fresh vegetables including carrots, lettuce, and tomatoes",
        location: "123 Green St, Downtown",
        expiryDate: "2024-11-15",
        donorName: "John's Farm",
        status: "available",
      },
      {
        id: "2",
        title: "Packaged Rice",
        category: "Groceries",
        description: "5kg bag of premium basmati rice, sealed",
        location: "456 Oak Ave, Midtown",
        expiryDate: "2025-01-20",
        donorName: "City Grocery",
        status: "available",
      },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData));
  }
};

export const getAllDonations = (): FoodDonation[] => {
  initializeSampleData();
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addDonation = (donation: Omit<FoodDonation, "id" | "status">): FoodDonation => {
  const donations = getAllDonations();
  const newDonation: FoodDonation = {
    ...donation,
    id: Date.now().toString(),
    status: "available",
  };
  donations.push(newDonation);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
  return newDonation;
};

export const updateDonationStatus = (id: string, status: FoodDonation["status"]) => {
  const donations = getAllDonations();
  const updated = donations.map((d) => (d.id === id ? { ...d, status } : d));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getAvailableDonations = (): FoodDonation[] => {
  return getAllDonations().filter((d) => d.status === "available");
};
