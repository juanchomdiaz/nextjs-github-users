import { Alert } from "react-bootstrap";

import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({message=''}) => {
    if (message === '' ) message="Ooops! An error has occurred retrieving data from Github API. Try again in a few minutes.";
    
    return ( 
        <Alert variant="danger" className={styles.errorMessage}>{message}</Alert>
     );
}
 
export default ErrorMessage;