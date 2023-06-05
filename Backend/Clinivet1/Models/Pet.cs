using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace PetAPI.Models
{
    public class Pet
    {
        [Key]
        [DataMember]
        public int PetId { get; set; }

        [Required]
        [DataMember]
        [Column(TypeName = "nvarchar(250)")]
        public string PetName { get; set; } = "";

        [Required]
        [DataMember]
        public float PetWeight { get; set; }

        [Required]
        [DataMember]
        public string PetGender { get; set; } = "";
    }
}
