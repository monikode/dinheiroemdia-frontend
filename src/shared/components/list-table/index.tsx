import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import { Pagination } from "../../../../node_modules/@mui/material/index";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./index.css";
import { StyledCard } from "../card/index";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { StyledButton } from "../button";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Category, categoryOperations } from "../../../api/category";
import { Spent, SpentResponse } from "../../../api/spent";
import { iconsList } from "../icon-picker";

export interface ListItemProps extends SpentResponse {
  color: string;
  icon: string;

  onUpdate: () => void;
  onDelete: () => void;
}

export interface ListTableProps {
  itemRoute: string;
  list: ListItemProps[];
  onCreate: () => void;
  addText?: string;
}

export function ListTable(props: ListTableProps) {
  const { list, itemRoute, onCreate, addText } = props;
  const [categories, setCategories] = useState<Category[]>([]);

  function ListItem(item: ListItemProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [icon, setIcon] = useState("");
    const [color, setColor] = useState("");

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

    useEffect(() => {
      categories.forEach((it) => {
        if (it.id == item.category.id) {
          setIcon(it.icon);
          setColor(it.color);
        }
      });
    }, [categories]);
    return (
      <Box className="list-item">
        <Grid container direction="row" alignItems="center" gap={2}>
          <Grid item xs="auto" alignItems="center">
            <Box className="icon" sx={{ backgroundColor: color }}>
              {iconsList.find((value) => value.name == icon)?.icon}
            </Box>
          </Grid>
          <Grid
            item
            container
            xs="auto"
            direction="column"
            style={{ flexGrow: 1 }}
          >
            <Grid item>
              <Typography variant="h5">{item.description}</Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography>
                {item.category.name} • {item.account.name}{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs="auto">
            R${item.value.toFixed(2)}
          </Grid>
          <Grid item xs="auto">
            {" "}
            <IconButton className="options">
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    );
  }
  useState(() => {
    categoryOperations.list().then((res) => {
      setCategories(res.data);
    });
  });
  return (
    <StyledCard container direction={"column"} flexWrap={"nowrap"}>
      <Box className="list-grid">
        <Box className="grid-item">
          <Grid
            container
            item
            xs={"auto"}
            className="grid-item"
            alignItems={"center"}
            gap={2}
            onClick={onCreate}
          >
            <Grid item>
              <StyledButton variant="contained">
                <AddIcon sx={{ fontSize: 30 }}></AddIcon>
              </StyledButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">{addText ?? "Adicionar"}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
          {/* <Typography>'765'</Typography> */}
          <Box>
            {list.map((item) => {
              return <ListItem {...item}></ListItem>;
            })}
          </Box>
        </Box>
      </Box>
    </StyledCard>
  );
}
