
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTrainers(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="firstname" variant="outlined" validate={required()}  />
<TextInput source="lastname" variant="outlined" validate={required()}  />
<NumberInput source="contactint" variant="outlined" validate={required()} />
<ReferenceInput label="trainingcourses" source="trainingcoursesid" reference="trainingcourses">
        <AutocompleteInput variant="outlined" /* optionText="trainingcourses"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}