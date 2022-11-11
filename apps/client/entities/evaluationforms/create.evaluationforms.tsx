
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateEvaluationforms(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="evaluationdate" variant="outlined" validate={required()}  />
<TextInput source="evaluationtext" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="evaluationtype" choices={[
{ id: "Exam", name: "Exam" },
{ id: "Assignment", name: "Assignment" },
{ id: "Feedback", name: "Feedback" },
]}  />
<ReferenceInput label="blankevaluationform" source="blankevaluationformid" reference="blankevaluationform">
        <AutocompleteInput variant="outlined" /* optionText="blankevaluationform"   */ />
      </ReferenceInput>
    
<ReferenceInput label="trainingcourses" source="trainingcoursesid" reference="trainingcourses">
        <AutocompleteInput variant="outlined" /* optionText="trainingcourses"   */ />
      </ReferenceInput>
    
<ReferenceInput label="trainers" source="trainersid" reference="trainers">
        <AutocompleteInput variant="outlined" /* optionText="trainers"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
