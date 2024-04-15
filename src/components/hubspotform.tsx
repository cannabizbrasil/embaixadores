import { useHubspotForm } from 'next-hubspot';

const HubspotEmbaixadorForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '874a6ae6-c417-4486-83ed-3c9bc2be0809',
        target: '#hubspot-form-embaixador'
    });

    return (
        <div id="hubspot-form-embaixador" />
    )
}

export default HubspotEmbaixadorForm;