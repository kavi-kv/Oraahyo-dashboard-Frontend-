import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { QuotesContext } from "../Backend/Context/QuotesContext";
import AlertDialog from "./alertDialog";
import UpdateDialog from "./updateDailog";

export default function QuoteCard({ data, author, id, category }) {
  const [showDialog, setShowDialog] = React.useState(false);
  const [updateDialog, setUpdateDialog] = React.useState(false);

  const toggleUpdateDialog = () => {
    setUpdateDialog(!updateDialog);
  };

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const { deleteQuote, updateQuoteData,fetchData } = React.useContext(QuotesContext);

 
  const handleDelete = async (quoteId) => {
    console.log(`Quote ID is: ${quoteId}`);
    deleteQuote(quoteId)
      .then((response) => {
        console.log(`Deleted quote with ID: ${quoteId}`, response);
      })
      .catch((error) => {
        console.error(`Error deleting quote with ID: ${quoteId}`, error);
      });
  };

  return (
    <Box width="300px">
      <Card sx={{ minWidth: 300, p: "1rem" }}>
        <Typography variant="body5" component="div">
          {data}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {author}
          <br />
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            sx={{ background: "#af2525", "&:hover": { background: "#a83f3f" } }}
            startIcon={<DeleteIcon />}
            // onClick={() => handleDelete(id)}
            onClick={toggleDialog}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            startIcon={<SettingsSuggestIcon />}
            onClick={toggleUpdateDialog}
          >
            Update
          </Button>
        </CardActions>
        {showDialog && (
          <AlertDialog
            onClose={toggleDialog}
            onClick={() => handleDelete(id)}
            header="Delete Quote"
            body="Do you want to delete this quote"
            btn1="Cancel"
            btn2="Delete"
          />
        )}
        {updateDialog && (
          <UpdateDialog
            onClose={toggleUpdateDialog}
            // onClick={() => hanleUpdate(id)}
            header="Update Quote"
            author={author}
            text={data}
            category={category}
            btn1="Cancel"
            btn2="Update"
            id={id}
            updateQuoteData={updateQuoteData}
            fetchData = {fetchData}
          />
        )}
      </Card>
    </Box>
  );
}
