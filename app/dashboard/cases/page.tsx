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
import { Briefcase } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    id: 1,
    case: {
      haveMedicare: true,
      accidentDateTime: "2022-01-01T00:00:00Z",
      accidentPlace: "Test Place",
      policeArrived: true,
      policePrecinct: "Test Precinct",
      reportFiled: true,
      reportNumber: "Test Report",
      accidentDetail: "Test Accident Detail",
      goingTo: "Test Going To",
      clientRelation: "Test Client Relation",
      theOwner: "Test Owner",
      witness1: "Test Witness 1",
      witness2: "Test Witness 2",
      witness1Phone: "(123) 456-7890",
      witness2Phone: "(123) 987-6543",
      weather: "Test Weather",
      roadCondition: "Test Road Condition",
      metalInBody: true,
      pregnant: true,
      injuries: "Test Injuries",
      otherInjuries: "Test Other Injuries",
      brokenBones: "Test Broken Bones",
      reasonForMRI: "Test Reason for MRI",
      lostConciousness: true,
    },
    medicalInformation: {
      hospitalName: "Test Hospital",
      byEMS: true,
      dateAdmitted: "2022-01-01T00:00:00Z",
      dateReleased: "2022-01-01T00:00:00Z",
      urgentCareName: "Test Urgent Care",
      urgentCarePhone: "(123) 456-7891",
      urgentCareDate: "2022-01-01T00:00:00Z",
      otherHospitalName: "Test Other Hospital",
      otherHospitalDate: "2022-01-01T00:00:00Z",
    },
    employmentInfo: {
      employer: "Test Employer",
      occupation: "Test Occupation",
      employmentAddress: "Test Employment Address",
      onTheBooks: true,
      filedIncomeTax: true,
      missedTimeFromWork: true,
      returnedToWork: true,
      accidentHappenedDuringWorkingHours: true,
    },
    previousAccidents: {
      dateOfAccident1: "2022-01-01T00:00:00Z",
      dateOfAccident2: "2022-01-01T00:00:00Z",
      injuries1: "Test Injuries 1",
      injuries2: "Test Injuries 2",
      injuries1Resolved: true,
      injuries2Resolved: true,
      injuries1Attorney: "Test Attorney 1",
      injuries2Attorney: "Test Attorney 2",
    },
    clientIds: [7, 9],
  },
  {
    id: 2,
    case: {
      haveMedicare: false,
      accidentDateTime: "2022-01-02T00:00:00Z",
      accidentPlace: "Another Test Place",
      policeArrived: false,
      policePrecinct: "Another Test Precinct",
      reportFiled: false,
      reportNumber: "Another Test Report",
      accidentDetail: "Another Test Accident Detail",
      goingTo: "Another Test Going To",
      clientRelation: "Another Test Client Relation",
      theOwner: "Another Test Owner",
      witness1: "Another Test Witness 1",
      witness2: "Another Test Witness 2",
      witness1Phone: "(123) 987-6543",
      witness2Phone: "(123) 456-7890",
      weather: "Another Test Weather",
      roadCondition: "Another Test Road Condition",
      metalInBody: false,
      pregnant: false,
      injuries: "Another Test Injuries",
      otherInjuries: "Another Test Other Injuries",
      brokenBones: "Another Test Broken Bones",
      reasonForMRI: "Another Test Reason for MRI",
      lostConciousness: false,
    },
    medicalInformation: {
      hospitalName: "Another Test Hospital",
      byEMS: false,
      dateAdmitted: "2022-01-02T00:00:00Z",
      dateReleased: "2022-01-02T00:00:00Z",
      urgentCareName: "Another Test Urgent Care",
      urgentCarePhone: "(123) 987-6543",
      urgentCareDate: "2022-01-02T00:00:00Z",
      otherHospitalName: "Another Test Other Hospital",
      otherHospitalDate: "2022-01-02T00:00:00Z",
    },
    employmentInfo: {
      employer: "Another Test Employer",
      occupation: "Another Test Occupation",
      employmentAddress: "Another Test Employment Address",
      onTheBooks: false,
      filedIncomeTax: false,
      missedTimeFromWork: false,
      returnedToWork: false,
      accidentHappenedDuringWorkingHours: false,
    },
    previousAccidents: {
      dateOfAccident1: "2022-01-02T00:00:00Z",
      dateOfAccident2: "2022-01-02T00:00:00Z",
      injuries1: "Another Test Injuries 1",
      injuries2: "Another Test Injuries 2",
      injuries1Resolved: false,
      injuries2Resolved: false,
      injuries1Attorney: "Another Test Attorney 1",
      injuries2Attorney: "Another Test Attorney 2",
    },
    clientIds: [10, 11],
  },
];

export default function CasesPage() {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-200">
      <CardTitle className="px-6 py-5 flex items-center border-b bg-gray-50 justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Cases</h2>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md cursor-pointer"
        >
          <Link href="/dashboard/cases/create">Add New Case</Link>
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
                <TableHead>Case ID</TableHead>
                <TableHead>Accident Date</TableHead>
                <TableHead>Accident Place</TableHead>
                <TableHead>Report Number</TableHead>
                <TableHead>Injuries</TableHead>
                <TableHead>Client IDs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((caseItem, index) => (
                <TableRow
                  key={`${caseItem.id}-${index}`}
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
                      <Briefcase className="h-4 w-4" /> Edit
                    </Button>
                  </TableCell>
                  <TableCell className="align-middle text-gray-700">
                    {caseItem.id}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {caseItem.case.accidentDateTime}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {caseItem.case.accidentPlace}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {caseItem.case.reportNumber}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {caseItem.case.injuries}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {caseItem.clientIds.join(", ")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
