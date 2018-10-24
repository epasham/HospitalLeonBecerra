import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { Row, Col, Button } from 'react-bootstrap';
import { renderField } from '../Widgets';
import '../../styles/button.css'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

  const AmbulatorioFormFourthPage = props => {
    const { handleSubmit, previousPage, guardado } = props;
    const styles = {      
      marginTitulo2: {
          marginTop: 25,
          marginBottom: 25,
          borderBottom: "1px solid silver"
      },
      button: {
        width: '100%',
        marginTop: "3px"
      },
      marginLeft20: {
        marginLeft: 20
      }
    }
  return (
    <div>
    
      <h3 style={ styles.marginTitulo2 }><b>Datos del Paciente</b></h3>
      
      <div style={ styles.marginLeft20 }>
        <Row>
          <h5>
            <Col md={3}><b>Nombre:</b></Col>
            <Col md={6}>{props.PacienteNombre+" "}</Col>
          </h5>
        </Row>
      
        <Row>
          <h5>
            <Col md={3}><b>Cédula:</b></Col>
            <Col md={6}>{props.pacienteCI}</Col>
          </h5>
        </Row>
      </div>

      <h3 style={ styles.marginTitulo2 }><b>Datos del Titular</b></h3>
      
      <div style={ styles.marginLeft20 }>
        <Row>
          <h5>
            <Col md={3}><b>Nombre:</b></Col>
            <Col md={6}>{props.TitularNombre+" "}</Col>
          </h5>
        </Row>

        <Row>
          <h5>
            <Col md={3}><b>Cédula:</b></Col>
            <Col md={6}>{props.titularCI}</Col>
          </h5>
        </Row>
      </div>

      <h3 style={ styles.marginTitulo2 }><b>Verifique y complete datos</b></h3>
        <form onSubmit={handleSubmit}>
      
          <div style={ styles.marginLeft20 }>  
            <Row>
              <Col xs ={6} md={6}>
                <Field
                  name="padre"
                  type="text"
                  component={renderField}
                  label="Padre: "
                  placeholder="Halar del RC"
                />
              </Col>
            </Row>

            <Row>
              <Col xs ={6} md={6}>
                <Field
                  name="madre"
                  type="text"
                  component={renderField}
                  label="Madre: "
                  placeholder="Halar del RC"
                />
              </Col>
            </Row>

            <Row>
              <Col xs ={6} md={6}>
                <Field
                  name="conyuge"
                  type="text"
                  component={renderField}
                  label="Cónyuge: "
                  placeholder="Halar del RC"
                />
              </Col>
            </Row>

          </div>

          <hr></hr>
          <Col md={3}></Col>
          <Col md={6}>
            <Button bsStyle="success" style={ styles.button } type="submit" className="button">GUARDAR</Button>                            
          </Col>

          {guardado && (
            <div style={{"color":"green",fontWeight: "bold"}}> LOS DATOS FUERON GUARDADOS EXITOSAMENTE</div>
          )}

      </form>
    </div>
  );
};
export default reduxForm({
  form: 'ambulatorio3', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  initialValues:{
  "Nacionalidad": {
    "nacionalidad": "Ecuatoriana",
    "value": "ecuatoriana"
  },
  "Cultura_Étnica": {
    "Cultura_Étnica": "Mestizo/a",
    "value": "mestizo"
  },
  "Provincia": {
    "provincia": "Guayas",
    "value": "guayas"
  },
  "Ciudad": {
    "ciudad": "Guayaquil",
    "value": "guayaquil"
  }
  }
})(AmbulatorioFormFourthPage);

