
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateEvaluationanswers(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="answertext" variant="outlined" validate={required()}  />
<ReferenceInput label="evaluationquestions" source="evaluationquestionsid" reference="evaluationquestions">
        <AutocompleteInput variant="outlined" /* optionText="evaluationquestions"   */ />
      </ReferenceInput>
    
<ReferenceInput label="evaluationforms" source="evaluationformsid" reference="evaluationforms">
        <AutocompleteInput variant="outlined" /* optionText="evaluationforms"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
