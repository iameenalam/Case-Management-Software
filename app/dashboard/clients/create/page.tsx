"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/services/api";

const CreateClientForm = () => {
  const [inTakeBy, setInTakeBy] = React.useState("");
  const [referredBy, setReferredBy] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [homePhone, setHomePhone] = React.useState("");
  const [workPhone, setWorkPhone] = React.useState("");
  const [ssn, setSsn] = React.useState("");
  const [emergencyContactName, setEmergencyContactName] = React.useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = React.useState("");
  const [relationshipToEmergencyContact, setRelationshipToEmergencyContact] =
    React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const formattedDateOfBirth = new Date(dateOfBirth).toISOString();
      const clientData = {
        client: {
          inTakeBy,
          referredBy,
          firstName,
          lastName,
          middleName,
          address,
          city,
          state,
          sex,
          zip,
          phone,
          email,
          dateOfBirth: formattedDateOfBirth,
          homePhone,
          workPhone,
          ssn,
          emergencyContactName,
          emergencyContactPhone,
          relationshipToEmergencyContact,
        },
      };

      const newClient = await createClient(clientData);
      console.log("Client created:", newClient);
      localStorage.setItem("newClientId", newClient.toString());
      router.push("/dashboard/clients");
    } catch (error) {
      console.error("Error creating client:", error);
      setErrorMessage(
        "Failed to create client. Please check the form and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/clients">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Client</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
          <CardDescription>
            In this form you can create your client
          </CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>In Take By</Label>
              <Input
                type="text"
                value={inTakeBy}
                onChange={(e) => setInTakeBy(e.target.value)}
                className="w-full"
                placeholder="In Take By"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Referred By</Label>
              <Input
                type="text"
                value={referredBy}
                onChange={(e) => setReferredBy(e.target.value)}
                className="w-full"
                placeholder="Referred By"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>First Name</Label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Last Name</Label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Middle Name</Label>
              <Input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className="w-full"
                placeholder="Middle Name"
              />
            </div>{" "}
            <div className="flex flex-col gap-3">
              <Label>Address</Label>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full"
                placeholder="Address"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>City</Label>
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full"
                placeholder="City"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>State</Label>
              <Input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full"
                placeholder="State"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Sex</Label>
              <Select value={sex} onValueChange={setSex}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Zip</Label>
              <Input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full"
                placeholder="Zip"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Phone</Label>
              <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full"
                placeholder="Phone"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Date of Birth</Label>
              <Input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full"
                placeholder="Date of Birth"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Home Phone</Label>
              <Input
                type="text"
                value={homePhone}
                onChange={(e) => setHomePhone(e.target.value)}
                className="w-full"
                placeholder="Home Phone"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Work Phone</Label>
              <Input
                type="text"
                value={workPhone}
                onChange={(e) => setWorkPhone(e.target.value)}
                className="w-full"
                placeholder="Work Phone"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>SSN</Label>
              <Input
                type="text"
                value={ssn}
                onChange={(e) => setSsn(e.target.value)}
                className="w-full"
                placeholder="SSN"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Emergency Contact Name</Label>
              <Input
                type="text"
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
                className="w-full"
                placeholder="Emergency Contact Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Emergency Contact Phone</Label>
              <Input
                type="text"
                value={emergencyContactPhone}
                onChange={(e) => setEmergencyContactPhone(e.target.value)}
                className="w-full"
                placeholder="Emergency Contact Phone"
              />
            </div>{" "}
            <div className="flex flex-col gap-3">
              <Label>Relationship to Emergency Contact</Label>
              <Input
                type="text"
                value={relationshipToEmergencyContact}
                onChange={(e) =>
                  setRelationshipToEmergencyContact(e.target.value)
                }
                className="w-full"
                placeholder="Relationship to Emergency Contact"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md cursor-pointer"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Client"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateClientForm;
