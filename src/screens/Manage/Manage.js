import React, { useState } from 'react';

import { ManageNavigation } from '../../components/ManageNavigation/ManageNavigation';
import { ProductForm } from '../../components/ManageForms/ProductForm';
import { ShopForm } from '../../components/ManageForms/ShopForm';
import { SectionForm } from '../../components/ManageForms/SectionForm';

import './manage.scss';

export const Manage = (props) => {
  const [tabOpen, setTabOpen] = useState('products');

  return (
    <div className="page manage">
      <ManageNavigation setTabOpen={setTabOpen}/>
      {tabOpen === 'products' && <ProductForm />}
      {tabOpen === 'shops' && <ShopForm />}
      {tabOpen === 'sections' && <SectionForm />}
    </div>
  )
};