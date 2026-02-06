
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface OracleResponse {
  message: string;
  insight: string;
  cardName?: string;
}