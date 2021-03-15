import { Alert } from "react-bootstrap";

import styles from './ErrorMessage.module.scss';

import PropTypes from 'prop-types';

import { useTranslation } from "react-i18next";

const ErrorMessage = ({message=''}) => {
    const { t } = useTranslation();

    if (message === '' ) message=t("generic_api_error");

    return ( 
        <Alert variant="danger" className={styles.errorMessage}>{message}</Alert>
     );
}
 
ErrorMessage.propTypes = {
    message: PropTypes.string,
};


export default ErrorMessage;