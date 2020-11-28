package com.udremaja.udremaja.core.company

import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path="companies")
interface CompanyRepository : CrudRepository<Company, Long> {
}

@RepositoryRestResource(path="branches")
interface CompanyBranchRepository : CrudRepository<CompanyBranch, Long> {
}