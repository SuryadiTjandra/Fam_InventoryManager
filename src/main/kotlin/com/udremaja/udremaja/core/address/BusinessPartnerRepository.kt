package com.udremaja.udremaja.core.address

import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface BusinessPartnerRepository : PagingAndSortingRepository<BusinessPartner, Long>{
}