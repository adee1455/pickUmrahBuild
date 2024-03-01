import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table"


export default function PriceBox({twoShare,threeShare,fourShare,childBed, infant}){
    return(
      (
  
        <Card className="w-3xl right-10 md:flex flex-col py-5 font-sans ">
        <CardHeader>
          <CardTitle className="tracking-wide">Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="mb-2">
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">2 Share</TableCell>
                <TableCell className="text-right text-black">{twoShare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">3 Share</TableCell>
                <TableCell className="text-right">{threeShare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">4 Share</TableCell>
                <TableCell className="text-right">{fourShare}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="md:text-sm text-xs text-gray-500 mt-2">All Prices are Per Person</p>
          <p className="md:text-sm text-xs text-gray-500">* Child without bed - {childBed}, Infant - {infant}</p>
        </CardContent>
        <CardFooter className="flex justify-center mt-2">
         <button className="bg-black text-white py-3 px-5 rounded-lg font-semibold"> Book Now </button>
        </CardFooter>
      </Card>
      )
    );
  }