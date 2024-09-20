import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function ChallegesRoute() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/challenges");
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Challenges</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Find All Challenges Here...
          </CardDescription>
        </CardHeader>

        <CardContent className="text-left">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Icon</TableHead>
                <TableHead>Available Challenges</TableHead>
                <TableHead>Modules</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Attempts</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="size-20 rounded-md bg-slate-200"></div>
                </TableCell>
                <TableCell>Kubernates</TableCell>
                <TableCell>0/20</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <Badge
                    variant={"outline"}
                    className="bg-green-500/10 text-green-500"
                  >
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="size-20 rounded-md bg-slate-200"></div>
                </TableCell>
                <TableCell>Express</TableCell>
                <TableCell>0/10</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <Badge
                    variant={"outline"}
                    className="bg-green-500/10 text-green-500"
                  >
                    Pending
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
