import { useHubspotForm } from 'next-hubspot';

const HubspotContactForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '44a0c9cb-1bb2-4a0c-98b8-a0c9dd623345',
        target: '#hubspot-form-contatos'
    });

    return (

        <div id="hubspot-form-contatos" />

    )
}

export default HubspotContactForm;