using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace UsuarioAPI.Models
{
    public class Usuario
    {
        [Key]
        [DataMember]
        public int UsuarioId { get; set; }

        [Required]
        [DataMember]
        [Column(TypeName = "nvarchar(250)")]
        public string UsuarioName { get; set; } = "";

        [Required]
        [DataMember]
        public string UsuarioCargo { get; set; } = "";

        [Required]
        [DataMember]
        public string UsuarioLogin { get; set; } = "";


        [Required]
        [DataMember]
        public string UsuarioSenha { get; set; } = "";



    }
}
