import Form from "../../islands/Form.tsx";
export interface Props {
    name?: string;

  }
  
export default function Section({name}:Props){
    return(
        <div class="container">
            <Form/>
        </div>
    )
}