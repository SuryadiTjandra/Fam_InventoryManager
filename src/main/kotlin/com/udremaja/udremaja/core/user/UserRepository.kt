package com.udremaja.udremaja.core.user

import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path="user", collectionResourceRel = "user")
interface UserRepository: CrudRepository<AppUser, Long> {
    fun findByName(name: String): AppUser?
}