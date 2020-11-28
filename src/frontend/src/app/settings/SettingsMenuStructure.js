import UserApp from './user/UserApp.vue';
import CompanyApp from './company/CompanyApp.vue';
import CompanyBranchApp from './company/CompanyBranchApp.vue';
import PartnerApp from './businessPartners/PartnerApp.vue';

export default {
  name: 'Settings',
  id: 'settings',
  sequence: 999,
  structure: [{
    id: 'user',
    name: 'User',
    sequence: 1,
    content: UserApp
  }, {
    id: 'companies_top',
    name: 'Companies',
    sequence: 2,
    children: [{
      id: 'companies',
      name: 'Company',
      sequence: 1,
      content: CompanyApp
    }, {
      id: 'companyBranches',
      name: 'Branches',
      sequence: 2,
      content: CompanyBranchApp
    }]
  },{
    id: 'businessPartners',
    name: 'Partners',
    sequence: 3,
    content: PartnerApp
  }]
}
