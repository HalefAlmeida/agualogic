package com.halvxys.aqualogic.models;

import javax.persistence.*;

@Entity
@Table(name = "aquarium")
public class Aquarium {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "nr_sequencia")
    private long nr_sequencia;

    @Column(name = "nm_aquarium")
    private String nm_aquarium;

    @Column(name = "ie_ativo")
    private Character  ie_ativo;

    public long getNr_sequencia() {
        return nr_sequencia;
    }

    public void setNr_sequencia(long nr_sequencia) {
        this.nr_sequencia = nr_sequencia;
    }

    public String getNm_aquarium() {
        return nm_aquarium;
    }

    public void setNm_aquarium(String nm_aquarium) {
        this.nm_aquarium = nm_aquarium;
    }

    public char getIe_ativo() {
        return ie_ativo;
    }

    public void setIe_ativo(char ie_ativo) {
        this.ie_ativo = ie_ativo;
    }
}
