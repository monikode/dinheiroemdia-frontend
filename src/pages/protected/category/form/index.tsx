import { Box } from "../../../../../node_modules/@mui/material/index";
import { StyledTextField } from "../../../../shared/components/text-field/index";

export function CategoryForm() {
    return (
        <Box>

            <StyledTextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
            />
        </Box>
    )
}
