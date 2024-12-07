export default function Alert(props){

    return (
        props.abc && <div class={`alert alert-${props.abc.type} d-flex align-items-center justify-content-center`} role="alert" id="one">
 
  <div >
   {props.abc.mesg}
  </div>
</div>

    );
}
