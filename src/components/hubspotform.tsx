import { useHubspotForm } from 'next-hubspot';

const HubspotEmbaixadorForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '70da7409-681f-4982-a55d-dacf94bc32fe',
        target: '#hubspot-form-embaixador'
    });

    return (

        <div id="hubspot-form-embaixador" />

    )
}

export default HubspotEmbaixadorForm;