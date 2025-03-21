"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User, Edit2 } from "lucide-react";
import Link from "next/link";
import { getClientData, ClientData } from "@/services/api";

export default function ClientsPage() {
  const [clients, setClients] = useState<ClientData[]>(() => {
    const storedClients = localStorage.getItem("clients");
    try {
      return storedClients ? JSON.parse(storedClients) : [];
    } catch (error) {
      console.error("Error parsing clients from localStorage:", error);
      return [];
    }
  });
  const [newClientId, setNewClientId] = useState<number | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      console.log("Fetching clients...");
      const storedClientId = localStorage.getItem("newClientId");
      if (storedClientId) {
        try {
          const clientId = parseInt(storedClientId, 10);
          console.log("New client ID:", clientId);
          setNewClientId(clientId);
          localStorage.removeItem("newClientId");
        } catch (error) {
          console.error("Error parsing client ID:", error);
        }
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    if (newClientId !== null) {
      const fetchNewClient = async () => {
        try {
          console.log("Fetching new client data...");
          const newClient = await getClientData(newClientId);
          console.log("Fetched client data:", newClient);
          setClients((prevClients: ClientData[]) => [
            ...prevClients,
            newClient,
          ]);
        } catch (error) {
          console.error("Error fetching new client:", error);
        }
      };

      fetchNewClient();
    }
  }, [newClientId]);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    console.log("Current clients state:", clients);
  }, [clients]);

  return (
    <Card className="shadow-lg rounded-lg border border-gray-200">
      <CardTitle className="px-6 py-5 flex items-center border-b bg-gray-50 justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Clients</h2>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md cursor-pointer"
        >
          <Link href="/dashboard/clients/create">Add New Client</Link>
        </Button>
      </CardTitle>
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <Table className="min-w-full border rounded-lg">
            <TableHeader>
              <TableRow className="bg-gray-100 text-gray-700">
                <TableHead className="w-10 text-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                  />
                </TableHead>
                <TableHead className="w-20 text-left">Actions</TableHead>
                <TableHead>In Take By</TableHead>
                <TableHead>Referred By</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Middle Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>City</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Sex</TableHead>
                <TableHead>Zip</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date of Birth</TableHead>
                <TableHead>Home Phone</TableHead>
                <TableHead>Work Phone</TableHead>
                <TableHead>SSN</TableHead>
                <TableHead>Emergency Contact Name</TableHead>
                <TableHead>Emergency Contact Phone</TableHead>
                <TableHead>Relationship to Emergency Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.length > 0 ? (
                clients.map((client: ClientData, index: number) => (
                  <TableRow
                    key={`${client?.client?.email}-${index}`}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="w-10 text-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                      />
                    </TableCell>
                    <TableCell className="w-20">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        <Edit2 className="h-4 w-4" /> Edit
                      </Button>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {String(client?.client?.inTakeBy ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {String(client?.client?.referredBy ?? "N/A")}
                    </TableCell>
                    <TableCell className="align-middle text-blue-600 font-medium">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-gray-600" />
                        <span>
                          {String(client?.client?.firstName ?? "")}{" "}
                          {String(client?.client?.lastName ?? "")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {String(client?.client?.lastName ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {String(client?.client?.middleName ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.address ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.city ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.state ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.sex ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.zip ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {String(client?.client?.phone ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-blue-600 underline cursor-pointer">
                      {String(client?.client?.email ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.dateOfBirth ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.homePhone ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.workPhone ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.ssn ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.emergencyContactName ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(client?.client?.emergencyContactPhone ?? "N/A")}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {String(
                        client?.client?.relationshipToEmergencyContact ?? "N/A"
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={18} className="text-center">
                    No clients found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
