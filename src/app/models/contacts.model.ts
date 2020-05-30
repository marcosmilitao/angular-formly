import { FormlyFieldConfig } from '@ngx-formly/core';
export class Contact {
    name: string;
    phoneNumber: string;
    email: string;

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Name',
                    placeholder: 'Name',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide a name!'
                    }
                }

            },
            {
                key: 'phone',
                type: 'input',
                templateOptions: {
                    type: 'tel',
                    label: 'Phone',
                    placeholder: 'Phone',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide a phone!'
                    }
                }
            },
            {
                key: 'email',
                id: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Email',
                    required: true
                },
                validation: {
                    messages: {
                        required: 'You need to provide a e-mail!'
                    }
                }
            }
        ];
    }
}