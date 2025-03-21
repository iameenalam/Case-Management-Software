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
import { createCase } from "@/services/api";

const CreateCaseForm = () => {
  const [haveMedicare, setHaveMedicare] = React.useState(false);
  const [accidentDateTime, setAccidentDateTime] = React.useState("");
  const [accidentPlace, setAccidentPlace] = React.useState("");
  const [policeArrived, setPoliceArrived] = React.useState(false);
  const [policePrecinct, setPolicePrecinct] = React.useState("");
  const [reportFiled, setReportFiled] = React.useState(false);
  const [reportNumber, setReportNumber] = React.useState("");
  const [accidentDetail, setAccidentDetail] = React.useState("");
  const [goingTo, setGoingTo] = React.useState("");
  const [clientRelation, setClientRelation] = React.useState("");
  const [theOwner, setTheOwner] = React.useState("");
  const [witness1, setWitness1] = React.useState("");
  const [witness2, setWitness2] = React.useState("");
  const [witness1Phone, setWitness1Phone] = React.useState("");
  const [witness2Phone, setWitness2Phone] = React.useState("");
  const [weather, setWeather] = React.useState("");
  const [roadCondition, setRoadCondition] = React.useState("");
  const [metalInBody, setMetalInBody] = React.useState(false);
  const [pregnant, setPregnant] = React.useState(false);
  const [injuries, setInjuries] = React.useState("");
  const [otherInjuries, setOtherInjuries] = React.useState("");
  const [brokenBones, setBrokenBones] = React.useState("");
  const [reasonForMRI, setReasonForMRI] = React.useState("");
  const [lostConciousness, setLostConciousness] = React.useState(false);

  const [hospitalName, setHospitalName] = React.useState("");
  const [byEMS, setByEMS] = React.useState(false);
  const [dateAdmitted, setDateAdmitted] = React.useState("");
  const [dateReleased, setDateReleased] = React.useState("");
  const [urgentCareName, setUrgentCareName] = React.useState("");
  const [urgentCarePhone, setUrgentCarePhone] = React.useState("");
  const [urgentCareDate, setUrgentCareDate] = React.useState("");
  const [otherHospitalName, setOtherHospitalName] = React.useState("");
  const [otherHospitalDate, setOtherHospitalDate] = React.useState("");

  const [employer, setEmployer] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [employmentAddress, setEmploymentAddress] = React.useState("");
  const [onTheBooks, setOnTheBooks] = React.useState(false);
  const [filedIncomeTax, setFiledIncomeTax] = React.useState(false);
  const [missedTimeFromWork, setMissedTimeFromWork] = React.useState(false);
  const [returnedToWork, setReturnedToWork] = React.useState(false);
  const [
    accidentHappenedDuringWorkingHours,
    setAccidentHappenedDuringWorkingHours,
  ] = React.useState(false);

  const [dateOfAccident1, setDateOfAccident1] = React.useState("");
  const [dateOfAccident2, setDateOfAccident2] = React.useState("");
  const [injuries1, setInjuries1] = React.useState("");
  const [injuries2, setInjuries2] = React.useState("");
  const [injuries1Resolved, setInjuries1Resolved] = React.useState(false);
  const [injuries2Resolved, setInjuries2Resolved] = React.useState(false);
  const [injuries1Attorney, setInjuries1Attorney] = React.useState("");
  const [injuries2Attorney, setInjuries2Attorney] = React.useState("");
  const [clientIds, setClientIds] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const formattedAccidentDateTime = accidentDateTime
        ? new Date(accidentDateTime).toISOString()
        : "";
      const formattedDateAdmitted = dateAdmitted
        ? new Date(dateAdmitted).toISOString()
        : "";
      const formattedDateReleased = dateReleased
        ? new Date(dateReleased).toISOString()
        : "";
      const formattedUrgentCareDate = urgentCareDate
        ? new Date(urgentCareDate).toISOString()
        : "";
      const formattedOtherHospitalDate = otherHospitalDate
        ? new Date(otherHospitalDate).toISOString()
        : "";
      const formattedDateOfAccident1 = dateOfAccident1
        ? new Date(dateOfAccident1).toISOString()
        : "";
      const formattedDateOfAccident2 = dateOfAccident2
        ? new Date(dateOfAccident2).toISOString()
        : "";

      const caseData: any = {
        case: {
          haveMedicare,
          accidentDateTime: formattedAccidentDateTime,
          accidentPlace,
          policeArrived,
          policePrecinct,
          reportFiled,
          reportNumber,
          accidentDetail,
          goingTo,
          clientRelation,
          theOwner,
          witness1,
          witness2,
          witness1Phone,
          witness2Phone,
          weather,
          roadCondition,
          metalInBody,
          pregnant,
          injuries,
          otherInjuries,
          brokenBones,
          reasonForMRI,
          lostConciousness,
        },
        medicalInformation: {
          hospitalName,
          byEMS,
          dateAdmitted: formattedDateAdmitted,
          dateReleased: formattedDateReleased,
          urgentCareName,
          urgentCarePhone,
          urgentCareDate: formattedUrgentCareDate,
          otherHospitalName,
          otherHospitalDate: formattedOtherHospitalDate,
        },
        employmentInfo: {
          employer,
          occupation,
          employmentAddress,
          onTheBooks,
          filedIncomeTax,
          missedTimeFromWork,
          returnedToWork,
          accidentHappenedDuringWorkingHours,
        },
        previousAccidents: {
          dateOfAccident1: formattedDateOfAccident1,
          dateOfAccident2: formattedDateOfAccident2,
          injuries1,
          injuries2,
          injuries1Resolved,
          injuries2Resolved,
          injuries1Attorney,
          injuries2Attorney,
        },
        clientIds,
      };

      const newCase = await createCase(caseData);
      console.log("Case created:", newCase);
      router.push("/dashboard/cases");
    } catch (error) {
      console.error("Error creating case:", error);
      setErrorMessage(
        "Failed to create case. Please check the form and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/cases">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Case</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Case Details</CardTitle>
          <CardDescription>
            In this form you can create your case
          </CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="flex flex-col gap-6">
            {/* Case Information */}
            <div className="flex flex-col gap-3">
              <Label>Have Medicare</Label>
              <Select
                value={haveMedicare ? "true" : "false"}
                onValueChange={(value) => setHaveMedicare(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Accident Date and Time</Label>
              <Input
                type="datetime-local"
                value={accidentDateTime}
                onChange={(e) => setAccidentDateTime(e.target.value)}
                className="w-full"
                placeholder="Accident Date and Time"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Accident Place</Label>
              <Input
                type="text"
                value={accidentPlace}
                onChange={(e) => setAccidentPlace(e.target.value)}
                className="w-full"
                placeholder="Accident Place"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Police Arrived</Label>
              <Select
                value={policeArrived ? "true" : "false"}
                onValueChange={(value) => setPoliceArrived(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Police Precinct</Label>
              <Input
                type="text"
                value={policePrecinct}
                onChange={(e) => setPolicePrecinct(e.target.value)}
                className="w-full"
                placeholder="Police Precinct"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Report Filed</Label>
              <Select
                value={reportFiled ? "true" : "false"}
                onValueChange={(value) => setReportFiled(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Report Number</Label>
              <Input
                type="text"
                value={reportNumber}
                onChange={(e) => setReportNumber(e.target.value)}
                className="w-full"
                placeholder="Report Number"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Accident Detail</Label>
              <Input
                type="text"
                value={accidentDetail}
                onChange={(e) => setAccidentDetail(e.target.value)}
                className="w-full"
                placeholder="Accident Detail"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Going To</Label>
              <Input
                type="text"
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
                className="w-full"
                placeholder="Going To"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Client Relation</Label>
              <Input
                type="text"
                value={clientRelation}
                onChange={(e) => setClientRelation(e.target.value)}
                className="w-full"
                placeholder="Client Relation"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>The Owner</Label>
              <Input
                type="text"
                value={theOwner}
                onChange={(e) => setTheOwner(e.target.value)}
                className="w-full"
                placeholder="The Owner"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Witness 1</Label>
              <Input
                type="text"
                value={witness1}
                onChange={(e) => setWitness1(e.target.value)}
                className="w-full"
                placeholder="Witness 1"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Witness 2</Label>
              <Input
                type="text"
                value={witness2}
                onChange={(e) => setWitness2(e.target.value)}
                className="w-full"
                placeholder="Witness 2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Witness 1 Phone</Label>
              <Input
                type="text"
                value={witness1Phone}
                onChange={(e) => setWitness1Phone(e.target.value)}
                className="w-full"
                placeholder="Witness 1 Phone"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Witness 2 Phone</Label>
              <Input
                type="text"
                value={witness2Phone}
                onChange={(e) => setWitness2Phone(e.target.value)}
                className="w-full"
                placeholder="Witness 2 Phone"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Weather</Label>
              <Input
                type="text"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                className="w-full"
                placeholder="Weather"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Road Condition</Label>
              <Input
                type="text"
                value={roadCondition}
                onChange={(e) => setRoadCondition(e.target.value)}
                className="w-full"
                placeholder="Road Condition"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Metal in Body</Label>
              <Select
                value={metalInBody ? "true" : "false"}
                onValueChange={(value) => setMetalInBody(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Pregnant</Label>
              <Select
                value={pregnant ? "true" : "false"}
                onValueChange={(value) => setPregnant(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries</Label>
              <Input
                type="text"
                value={injuries}
                onChange={(e) => setInjuries(e.target.value)}
                className="w-full"
                placeholder="Injuries"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Other Injuries</Label>
              <Input
                type="text"
                value={otherInjuries}
                onChange={(e) => setOtherInjuries(e.target.value)}
                className="w-full"
                placeholder="Other Injuries"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Broken Bones</Label>
              <Input
                type="text"
                value={brokenBones}
                onChange={(e) => setBrokenBones(e.target.value)}
                className="w-full"
                placeholder="Broken Bones"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Reason for MRI</Label>
              <Input
                type="text"
                value={reasonForMRI}
                onChange={(e) => setReasonForMRI(e.target.value)}
                className="w-full"
                placeholder="Reason for MRI"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Lost Consciousness</Label>
              <Select
                value={lostConciousness ? "true" : "false"}
                onValueChange={(value) => setLostConciousness(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Medical Information */}
            <div className="flex flex-col gap-3">
              <Label>Hospital Name</Label>
              <Input
                type="text"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                className="w-full"
                placeholder="Hospital Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>By EMS</Label>
              <Select
                value={byEMS ? "true" : "false"}
                onValueChange={(value) => setByEMS(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Date Admitted</Label>
              <Input
                type="date"
                value={dateAdmitted}
                onChange={(e) => setDateAdmitted(e.target.value)}
                className="w-full"
                placeholder="Date Admitted"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Date Released</Label>
              <Input
                type="date"
                value={dateReleased}
                onChange={(e) => setDateReleased(e.target.value)}
                className="w-full"
                placeholder="Date Released"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Urgent Care Name</Label>
              <Input
                type="text"
                value={urgentCareName}
                onChange={(e) => setUrgentCareName(e.target.value)}
                className="w-full"
                placeholder="Urgent Care Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Urgent Care Phone</Label>
              <Input
                type="text"
                value={urgentCarePhone}
                onChange={(e) => setUrgentCarePhone(e.target.value)}
                className="w-full"
                placeholder="Urgent Care Phone"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Urgent Care Date</Label>
              <Input
                type="date"
                value={urgentCareDate}
                onChange={(e) => setUrgentCareDate(e.target.value)}
                className="w-full"
                placeholder="Urgent Care Date"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Other Hospital Name</Label>
              <Input
                type="text"
                value={otherHospitalName}
                onChange={(e) => setOtherHospitalName(e.target.value)}
                className="w-full"
                placeholder="Other Hospital Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Other Hospital Date</Label>
              <Input
                type="date"
                value={otherHospitalDate}
                onChange={(e) => setOtherHospitalDate(e.target.value)}
                className="w-full"
                placeholder="Other Hospital Date"
              />
            </div>

            {/* Employment Information */}
            <div className="flex flex-col gap-3">
              <Label>Employer</Label>
              <Input
                type="text"
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
                className="w-full"
                placeholder="Employer"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Occupation</Label>
              <Input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full"
                placeholder="Occupation"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Employment Address</Label>
              <Input
                type="text"
                value={employmentAddress}
                onChange={(e) => setEmploymentAddress(e.target.value)}
                className="w-full"
                placeholder="Employment Address"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>On the Books</Label>
              <Select
                value={onTheBooks ? "true" : "false"}
                onValueChange={(value) => setOnTheBooks(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Filed Income Tax</Label>
              <Select
                value={filedIncomeTax ? "true" : "false"}
                onValueChange={(value) => setFiledIncomeTax(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Missed Time from Work</Label>
              <Select
                value={missedTimeFromWork ? "true" : "false"}
                onValueChange={(value) =>
                  setMissedTimeFromWork(value === "true")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Returned to Work</Label>
              <Select
                value={returnedToWork ? "true" : "false"}
                onValueChange={(value) => setReturnedToWork(value === "true")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Accident Happened During Working Hours</Label>
              <Select
                value={accidentHappenedDuringWorkingHours ? "true" : "false"}
                onValueChange={(value) =>
                  setAccidentHappenedDuringWorkingHours(value === "true")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Previous Accidents */}
            <div className="flex flex-col gap-3">
              <Label>Date of Accident 1</Label>
              <Input
                type="date"
                value={dateOfAccident1}
                onChange={(e) => setDateOfAccident1(e.target.value)}
                className="w-full"
                placeholder="Date of Accident 1"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Date of Accident 2</Label>
              <Input
                type="date"
                value={dateOfAccident2}
                onChange={(e) => setDateOfAccident2(e.target.value)}
                className="w-full"
                placeholder="Date of Accident 2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries 1</Label>
              <Input
                type="text"
                value={injuries1}
                onChange={(e) => setInjuries1(e.target.value)}
                className="w-full"
                placeholder="Injuries 1"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries 2</Label>
              <Input
                type="text"
                value={injuries2}
                onChange={(e) => setInjuries2(e.target.value)}
                className="w-full"
                placeholder="Injuries 2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries 1 Resolved</Label>
              <Select
                value={injuries1Resolved ? "true" : "false"}
                onValueChange={(value) =>
                  setInjuries1Resolved(value === "true")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries 2 Resolved</Label>
              <Select
                value={injuries2Resolved ? "true" : "false"}
                onValueChange={(value) =>
                  setInjuries2Resolved(value === "true")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries 1 Attorney</Label>
              <Input
                type="text"
                value={injuries1Attorney}
                onChange={(e) => setInjuries1Attorney(e.target.value)}
                className="w-full"
                placeholder="Injuries 1 Attorney"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Injuries 2 Attorney</Label>
              <Input
                type="text"
                value={injuries2Attorney}
                onChange={(e) => setInjuries2Attorney(e.target.value)}
                className="w-full"
                placeholder="Injuries 2 Attorney"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Client IDs</Label>
              <Input
                type="text"
                value={clientIds}
                onChange={(e) => setClientIds(e.target.value)}
                className="w-full"
                placeholder="Client IDs"
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
            {isLoading ? "Creating..." : "Create Case"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateCaseForm;
