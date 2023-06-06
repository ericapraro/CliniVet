﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetAPI.Models;

#nullable disable

namespace Clinivet1.Migrations
{
    [DbContext(typeof(APIdbcontext))]
    [Migration("20230606010912_updatedobanco3")]
    partial class updatedobanco3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("PetAPI.Models.Pet", b =>
                {
                    b.Property<int>("PetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PetId"), 1L, 1);

                    b.Property<string>("PetGender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("PetIdade")
                        .HasColumnType("real");

                    b.Property<string>("PetName")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("PetObs")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("PetWeight")
                        .HasColumnType("real");

                    b.HasKey("PetId");

                    b.ToTable("pets");
                });
#pragma warning restore 612, 618
        }
    }
}