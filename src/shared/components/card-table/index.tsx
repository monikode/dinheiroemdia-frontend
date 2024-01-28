import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import {
  Menu,
  MenuItem,
  Pagination,
} from "../../../../node_modules/@mui/material/index";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./index.css";
import { StyledCard } from "../card/index";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledButton } from "../button";
import AddIcon from "@mui/icons-material/Add";

export interface CardItemProps {
  id: number;
  name: string;
  consumption: number;
  percentage: number;
  color: string;
  icon: string;

  onUpdate: () => void;
  onDelete: () => void;
}

export interface CardTableProps {
  itemRoute: string;
  list: CardItemProps[];
  onCreate: () => void;
  addText?: string;
}
function CardItem(item: CardItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    item.onUpdate();
    setAnchorEl(null);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    item.onDelete();
    setAnchorEl(null);
  };

  return (
    <StyledCard className="card-item">
      <Grid container direction="column" alignItems="center">
        <Grid item alignItems="center">
          {" "}
          <FastfoodIcon className="icon" sx={{ backgroundColor: item.color }} />
        </Grid>
        <Grid item>
          {" "}
          <Typography variant="h5" textAlign="center">
            {item.name}
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          <Typography textAlign="center">
            R${item.consumption} gastos esse mês
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          <Typography textAlign="center">
            {item.percentage}% do consumo geral
          </Typography>
        </Grid>
      </Grid>
      <IconButton
        className="options"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-sbutton",
        }}
      >
        <MenuItem onClick={handleEdit}>Editar</MenuItem>
        <MenuItem onClick={handleDelete}>Excluir</MenuItem>
      </Menu>
    </StyledCard>
  );
}
export function CardTable(props: CardTableProps) {
  const { list, itemRoute, onCreate, addText } = props;
  const navigate = useNavigate();

  return (
    <Grid container direction={"column"} flexWrap={"nowrap"}>
      <Box className="card-grid">
        <Grid
          container
          item
          xs={"auto"}
          className="grid-item"
          onClick={onCreate}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Grid item>
            <StyledButton variant="contained">
              <AddIcon sx={{ fontSize: 40 }}></AddIcon>
            </StyledButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">{addText ?? "Adicionar"}</Typography>
          </Grid>
        </Grid>

        {list.map((item) => (
          <Box
            className="grid-item"
            onClick={() => navigate(itemRoute + item.id)}
          >
            <CardItem {...item}> </CardItem>
          </Box>
        ))}
      </Box>
    </Grid>
  );
}
