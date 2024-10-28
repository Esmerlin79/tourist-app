import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CustomButtonComponent } from './custom-button.component';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'shared/Components/CustomButton',
  component: CustomButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIcon, MatButtonModule],
    }),
  ],
  args: {
    label: 'Click me',
    icon: 'home',
    color: 'info',
    type: 'outline',
    disabled: false,
    withStartIcon: false,
    withEndIcon: false,
  },
} as Meta<CustomButtonComponent>;

export const Default: StoryObj<CustomButtonComponent> = {
  args: {
    label: 'Default Button',
  },
};

export const WithStartIcon: StoryObj<CustomButtonComponent> = {
  args: {
    label: 'With Icon',
    withStartIcon: true,
    icon: 'check',
  },
};

export const Disabled: StoryObj<CustomButtonComponent> = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};
