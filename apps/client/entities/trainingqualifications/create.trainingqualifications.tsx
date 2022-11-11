
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateTrainingqualifications(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="description" variant="outlined" validate={required()}  />
<ReferenceInput label="trainers" source="trainersid" reference="trainers">
        <AutocompleteInput variant="outlined" /* optionText="trainers"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
