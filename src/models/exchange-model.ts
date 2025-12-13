// src/models/exchange-model.ts
import { ExchangeInformation } from "../../generated/prisma";

// Request: What the frontend sends to us
export interface CreateExchangeRequest {
    name: string;
    phone: string;
    email?: string;       // Optional
    description?: string; // Optional
    helpRequestId: number; // The ID of the Post they are replying to
}

// Response: What we send back to the frontend
export interface ExchangeResponse {
    id: number;
    name: string;
    phone: string;
    email: string | null; // Prisma uses 'null' for optional fields
    description: string | null;
    helpRequestId: number;
}

// Helper: Convert Database Row -> Clean JSON Response
export function toExchangeResponse(exchange: ExchangeInformation): ExchangeResponse {
    return {
        id: exchange.id,
        name: exchange.name,
        phone: exchange.phone,
        email: exchange.email,
        description: exchange.description,
        helpRequestId: exchange.helpRequestId
    }
}

// part of step to connect to frontend later, this is to convert  a list of database rows to a list of clean JSON responses
export function toExchangeResponseList(exchanges: ExchangeInformation[]): ExchangeResponse[] {
    return exchanges.map((exchange) => toExchangeResponse(exchange));
}