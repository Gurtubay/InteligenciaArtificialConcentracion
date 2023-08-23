import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ProductDetails } from './product-details.component'

const routes = [
  {
    path: '',
    component: ProductDetails,
  },
]

@NgModule({
  declarations: [ProductDetails],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ProductDetails],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailsModule {}
