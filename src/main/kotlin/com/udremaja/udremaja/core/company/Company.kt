package com.udremaja.udremaja.core.company

import com.udremaja.udremaja.base.DatabaseEntity
import com.udremaja.udremaja.core.address.Address
import javax.persistence.*

@Entity
open class Company(
        name: String,
        @OneToOne(cascade=[CascadeType.ALL])
        val address: Address,
        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "company")
        val branches: Set<CompanyBranch> = emptySet()
) : DatabaseEntity(name) {

}

@Entity
open class CompanyBranch(
        name: String,
        @ManyToOne
        val company: Company,
        address: Address? = null
) : DatabaseEntity(name){
    @OneToOne(cascade=[CascadeType.ALL])
    var address: Address? = address
        get() = if (field != null) field else company.address
}