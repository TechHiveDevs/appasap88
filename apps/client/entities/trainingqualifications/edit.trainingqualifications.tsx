
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTrainingqualifications(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="description" variant="outlined" validate={required()}  />
<ReferenceInput label="trainers" source="trainersid" reference="trainers">
        <AutocompleteInput variant="outlined" /* optionText="trainers"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}