import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  ListItemProps,
  ListTable,
} from "../../../../shared/components/list-table/index";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useEffect, useState } from "react";
import { categoryOperations } from "../../../../api/category";
import { SpentForm } from "../../spents";
import { accountOperations } from "../../../../api/account";

export function Account() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [spentDialog, setSpentDialog] = useState(false);
  const [list, setList] = useState<ListItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onCreate = () => {
    setSpentDialog(true);
  };

  const onClose = () => {
    // setAccount(null)
  };
  const onConfirmed = () => {
    getList();
    //  setAccount(null)
  };

  const getList = () => {
    setIsLoading(true);
    if (id)
      accountOperations.listSpents(parseInt(id)).then((res) => {
        setIsLoading(false);

        setList(
          res.data.map((item) => {
            return {
              ...item,
              color: "",
              icon: "",
              onDelete: () => {
                // accountOperations.delete(item.id).then((res) => {
                // setAccount(null);
                // getList();
                // });
              },
              onUpdate: () => {
                // setOpenDialog(true);
              },
            };
          })
        );
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Grid container direction={"column"} flexWrap={"nowrap"} gap={2}>
      <Grid item xs={6} container gap={1}>
        <Grid item>
          <IconButton onClick={() => navigate(-1)}>
            <KeyboardArrowLeftIcon color="primary"></KeyboardArrowLeftIcon>
          </IconButton>
        </Grid>
        <Grid item>
          {" "}
          <Typography variant="h4"> Conta</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => navigate(-1)}>
            <FilterListIcon color="primary"></FilterListIcon>
          </IconButton>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        {isLoading ? (
          <CircularProgress
            sx={{ margin: "0 auto", padding: "10px", display: "block" }}
          />
        ) : (
          <ListTable
            onCreate={onCreate}
            list={list}
            itemRoute="/categoria/"
            addText="Adicionar Gasto"
          ></ListTable>
        )}
      </Grid>

      <SpentForm
        accountId={id}
        open={spentDialog}
        setOpen={setSpentDialog}
        onClose={onClose}
        onConfirmed={onConfirmed}
      ></SpentForm>
    </Grid>
  );
}
